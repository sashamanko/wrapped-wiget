export class WrappedWidget {
  _$widgetWrapper = document.createElement('div');
  _$widgetContainer;
  _$wigetName = 'WrappedWidget'

  
  constructor(position, size, tag) {


    this.position = position;
    this.size = size;

    this.tag = tag

    this._render();
  }

  _setAttributes(widgetWrapper, widgetContainer) {
    
    widgetWrapper.className = 'widget-wrapper';

    widgetContainer.className ='widget-container';

  }

  _setPosition(widgetWrapper, position) {

    if (position.x === 'left' || position.x === 'center' || position.x === 'right') {
      widgetWrapper.dataset.widgetPosition = `${position.x} `
    } else throw new Error(`position.x not defined "${position.x}"`)

    if (position.y === 'top' || position.y === 'center' || position.y === 'bottom') {
      widgetWrapper.dataset.widgetPosition += position.y
    } else throw new Error(`position.y not defined "${position.y}"`)

  }

  _setSize(widgetContainer, size) {

    widgetContainer.style = `width: ${size.w}px; height: ${size.h}px;`

  }

  removeWidget() {
    this._$widgetWrapper.remove()
  }

  _render() {
    const widgetContainer = document.createElement(this.tag);

    this._setAttributes(this._$widgetWrapper, widgetContainer);
    this._setPosition(this._$widgetWrapper, this.position);
    this._setSize(widgetContainer, this.size);

    this._$widgetWrapper.onclick = (e) => {
      if (e.target === this._$widgetWrapper) {
        this._$widgetWrapper.remove()
      }
    }
    
    this._$widgetWrapper.append(widgetContainer);
    
    document.body.append(this._$widgetWrapper);

    this._$widgetContainer = widgetContainer;
  }
}

// new WrappedWidget({x: 'center', y: 'center'}, {w: 100, h: 100}, 'div')



















// class SubmitModal extends WrappedWidget {
//   constructor(x, y, w, h, tag, title, text, acceptFunc) {
//     super(x, y, w, h, tag)
//     this.title = title;
//     this.text = text;
//     this.acceptFunc = acceptFunc;

//     this.renderTitle();
//   }

//   renderTitle() {
//     const title = document.createElement('div');
//     const closeBtnTitle = document.createElement('button')
//     const closeBtnContainer = document.createElement('button')

//     const modalContainer = document.createElement('div');
//     const text = document.createElement('p');

//     const btnBlock = document.createElement('div');
//     const acceptBtn = document.createElement('button');

    
//     title.className = 'title';
//     title.textContent = this.title;


//     title.className = 'widget__title';

//     modalContainer.className = 'widget__Container';

//     btnBlock.className = 'widget__block-btn';
    
//     closeBtnTitle.textContent = 'Close';
//     closeBtnTitle.onclick = () => {
//       this._$el.remove()
//     }

//     closeBtnContainer.textContent = 'Close';
//     closeBtnContainer.onclick = () => {
//       this._$el.remove()
//     }
    

//     acceptBtn.textContent = 'Accept'
//     acceptBtn.onclick = this.acceptFunc

//     text.textContent = this.text;

//     title.append(closeBtnTitle)

//     btnBlock.append(acceptBtn)
//     btnBlock.append(closeBtnContainer)

//     modalContainer.append(text)
    
//     this._$el.append(title);
//     this._$el.append(modalContainer);
//     this._$el.append(btnBlock)
//   }

// }



// const modal1 = new Modal(200, 200, 300, 200, 'div', 'title')

// const modal2 = new SubmitModal(100, 300, 300, 200, 'div', 'Accept modal', 'skdjflsdfnsd  sdfhsdjfjsd d sdhfksjdhfj djh fsjfssdfjskfj dskjf', ()=> console.log("accept modal"))