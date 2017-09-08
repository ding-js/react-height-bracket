import * as React from 'react';
import assign from 'object-assign';


interface Props {
  scroll?: boolean;
  container?: string | Window;
  className?: string;
  siblingsHeight?: number;
  style?: React.CSSProperties;
};

interface State {
  height: number | string;
};

class ReactHeightBracket extends React.Component<Props, State> {
  private element: HTMLDivElement;

  public constructor(props) {
    super(props);
    this.state = {
      height: 'auto'
    };
  }

  // private getSublingsHeight = (node: HTMLElement) => {
  //   const sibling = node ? node.nextElementSibling as HTMLElement : null;
  //   if (sibling) {
  //     const componentStyle = window.getComputedStyle(sibling);
  //     return parseInt(componentStyle['margin-bottom']) + parseInt(componentStyle['margin-top']) + parseInt(componentStyle['height']) + this.getSublingsHeight(sibling);
  //   } else {
  //     return 0;
  //   }
  // }

  private getParentsMarginPadding = (current: HTMLElement, target: HTMLElement): number => {
    const parent = (current && current !== target) ? current.parentElement : null;
    if (parent) {
      const componentStyle = window.getComputedStyle(parent);
      return (
        ['margin-bottom', 'padding-bottom', 'border-bottom'].reduce(
          (sum, prop) => sum + parseFloat(componentStyle[prop]), 0
        ) +
        this.getParentsMarginPadding(parent, target)
      );
    } else {
      return 0;
    }
  }

  private updateHeight() {
    const { container, siblingsHeight } = this.props
    const { element } = this;

    let height: number | string, target: HTMLElement;

    if (!element) {
      return;
    }

    if (typeof container === 'string') {
      const dom = document.querySelector(container) as HTMLElement;
      if (!dom) {
        return;
      }

      height = dom.offsetHeight;
      target = dom;

    } else if (!container || container === window) {
      height = window.innerHeight;
      target = document.body;
    } else {
      return;
    }


    height = height - (element.offsetTop - target.offsetTop) - this.getParentsMarginPadding(element, target) - (siblingsHeight || 0);

    if (height < 0) {
      height = 'auto';
    }

    this.setState({
      height
    });
  }

  public componentDidMount() {
    this.updateHeight();
  }


  public render(): JSX.Element {
    const keywords = ['className', 'style', 'children'];
    const props = keywords.reduce((propsMap, PropKey) => {
      if (this.props.hasOwnProperty(PropKey)) {
        propsMap[PropKey] = this.props[PropKey];
      }
      return propsMap;
    }, {} as any);

    const style: React.CSSProperties = {
      boxSizing: 'border-box'
    };

    if (scroll) {
      assign(style, {
        overflow: 'auto',
        height: this.state.height
      });
    } else {
      assign(style, {
        'min-height': this.state.height
      });
    }

    if (props.hasOwnProperty('style')) {
      assign(props.style, style);
    } else {
      assign(props, { style });
    }

    return (
      <div {...props} ref={ref => this.element = ref} />
    );
  }
}

export default ReactHeightBracket;
