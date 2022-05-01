import { WrappedWidget } from "./wrapped-widget.js";

export class WrappedModalForm extends WrappedWidget {
  _$wigetName = 'WrappedModalForm';

  constructor(position, size, tag, title, submitFn) {
    super(position, size, tag)

    this.title = title;

    this.submitFn = submitFn || null;

    this._renderModalSubmit();
  }

  _header() {
    const header = document.createElement('div');
    const title = document.createElement('h4');
    const closeBtn = document.createElement('button');

    header.className = 'modal-form-header block d-flex';

    title.className = 'modal-form-header__title';
    title.textContent = this.title;

    closeBtn.className = 'modal-form-header__close-btn ri-close-line';
    closeBtn.onclick = () => {

      this.removeWidget();
    };

    header.append(title);
    header.append(closeBtn);

    return header;
  }

  _body() {
    const body = document.createElement('form');

    body.className = 'modal-form-body';
    body.append(this._form());
    body.onsubmit = (e) => {
      e.preventDefault();

    if (body.name.value.trim().length > 0) {
      if (body.password.value.trim().length > 7 && body.confirmPassword.value.trim().length > 7) {
          if (body.password.value.trim() === body.confirmPassword.value.trim()) {
            this.submitFn({ name: body.name.value, password: body.password.value})
            this.removeWidget();
           } else {
              alert('Password does not match');
            }
        } else alert('Password must be more than 8 characters')
      } else alert('Enter name');
    }

    body.append(this._buttonsBlock());

    return body;
  }

  _form() {
    const inputBlock = document.createElement('div')
    const nameInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    const confirmPasswordInput = document.createElement('input');

    inputBlock.className = 'modal-form-body__input-block block';

    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Enter name';
    nameInput.autocomplete = 'off'
    
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.min = 8
    passwordInput.placeholder = 'Enter password';
    passwordInput.autocomplete = 'off'
    
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.name = 'confirmPassword';
    confirmPasswordInput.min = 8
    confirmPasswordInput.placeholder = 'Confirm password';
    confirmPasswordInput.autocomplete = 'off'

    inputBlock.append(nameInput);
    inputBlock.append(passwordInput);
    inputBlock.append(confirmPasswordInput);

    return inputBlock
  }

  _buttonsBlock() {

    const buttonsBlock = document.createElement('div');
    const submitBtn = document.createElement('button');

    buttonsBlock.className = 'modal-form-buttons-block';

    submitBtn.className = 'modal-form-buttons-block__dismiss-btn';
    submitBtn.textContent = 'Submit';
    submitBtn.type = 'submit';

    buttonsBlock.append(submitBtn);

    return buttonsBlock;
  }

  _renderModalSubmit() {
    this._$widgetContainer.append(this._header());
    this._$widgetContainer.append(this._body());
  }
}