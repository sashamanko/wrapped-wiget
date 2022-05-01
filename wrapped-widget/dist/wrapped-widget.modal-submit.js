import { WrappedWidget } from "./wrapped-widget.js";

export class WrappedModalSubmit extends WrappedWidget {
  _$wigetName = 'WrappedModalSubmit';

  constructor(position, size, tag, title, message, acceptFn, dismissFn) {
    super(position, size, tag)

    this.title = title;
    this.message = message;

    this.acceptFn = acceptFn || null;
    this.dismissFn = dismissFn || null;

    this._renderModalSubmit();
  }

  _header() {
    const header = document.createElement('div');
    const title = document.createElement('h4');
    const closeBtn = document.createElement('button');

    header.className = 'modal-submit-header block';

    title.className = 'modal-submit-header__title';
    title.textContent = this.title;

    closeBtn.className = 'modal-submit-header__close-btn ri-close-line';
    closeBtn.onclick = () => {

      this.removeWidget();
    };

    header.append(title);
    header.append(closeBtn);

    return header;
  }

  _body() {
    const body = document.createElement('div');
    const message = document.createElement('p');

    body.className = 'modal-submit-body block';
    
    message.className = 'modal-submit-body__message';
    message.innerHTML = this.message;

    body.append(message);

    return body;
  }

  _buttonsBlock() {

    const buttonsBlock = document.createElement('div');
    const acceptBtn = document.createElement('button');
    const dismissBtn = document.createElement('button');

    buttonsBlock.className = 'modal-submit-buttons-block';

    acceptBtn.className = 'modal-submit-buttons-block__accept-btn';
    acceptBtn.textContent = 'Accept'
    acceptBtn.onclick = () => {
      
      if (this.acceptFn !== null) {
        this.acceptFn()
      };
      
      this.removeWidget();
    };

    dismissBtn.className = 'modal-submit-buttons-block__dismiss-btn';
    dismissBtn.textContent = 'Dismiss';
    dismissBtn.onclick = () => {

      if (this.dismissFn !== null) {
        this.dismissFn();
      };

      this.removeWidget();
    };

    buttonsBlock.append(acceptBtn);
    buttonsBlock.append(dismissBtn);

    return buttonsBlock;
  }

  _renderModalSubmit() {
    this._$widgetContainer.append(this._header());
    this._$widgetContainer.append(this._body());
    this._$widgetContainer.append(this._buttonsBlock());
  }
}