import validator from 'validator';

class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  addConstraint(object) {
    const constraint = this.validations.find(item => item.field === object.field);
    if (!constraint) {
      this.validations.push(object);
    }
  }

  removeConstraint(fieldName) {
    const constraints = this.validations.filter(item => item.field !== fieldName);
    this.validations = constraints;
  }

  validate(state) {
    const validation = this.valid();

    this.validations.forEach((rule) => {
      if (rule.touched) {
        if (!validation[rule.field].isInvalid) {
          const fieldValue = state[rule.field] ? state[rule.field].toString() : '';

          const constraints = rule.constraints || [];

          constraints.forEach((constraint) => {
            const args = constraint.args || [];
            const validationMethod =
                  typeof constraint.method === 'string' ?
                    validator[constraint.method] :
                    constraint.method;

            if (validationMethod(fieldValue, ...args, state) !== constraint.validWhen) {
              validation[rule.field] = { isInvalid: true, message: constraint.message };
              validation.isValid = false;
            }
          });
        }
      }
    });

    return validation;
  }
  
  valid() {
    const validation = {};

    this.validations.map(rule => (
      validation[rule.field] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validation };
  }

  touched(fieldName) {
    const matches = this.validations.filter(item => (item.field === fieldName));

    matches.forEach((item) => {
      item.touched = true;
    });
  }

  canSubmit(state) {
    let canSubmit = true;
    this.validations.forEach((rule) => {
      if (!rule.touched) {
        canSubmit = false;
      }
    });

    if (canSubmit) {
      canSubmit = this.validate(state).isValid;
    }
    return canSubmit;
  }
}

export default FormValidator;
