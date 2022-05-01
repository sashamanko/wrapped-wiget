import { WrappedWidget } from "./wrapped-widget.js";

export class WrappedModalInfo extends WrappedWidget {
  _$wigetName = 'WrappedModalInfo';

  constructor(position, size, tag, title, message) {
    super(position, size, tag)

    this.title = title;
    this.message = message;

    this._renderModalInfo();
  }

  _header() {
    const header = document.createElement('div');
    const title = document.createElement('h4');
    const closeBtn = document.createElement('button');

    header.className = 'modal-info-header block';

    title.className = 'modal-info-header__title';
    title.textContent = this.title;

    closeBtn.className = 'modal-info-header__close-btn ri-close-line';
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

    body.className = 'modal-info-body block';
    
    message.className = 'modal-info-body__message';
    message.innerHTML = this.message;

    body.append(message);

    return body;
  }

  _renderModalInfo() {
    this._$widgetContainer.append(this._header());
    this._$widgetContainer.append(this._body());
  }
}

