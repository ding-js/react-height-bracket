import * as React from 'react';

interface Props { };

interface State { };

class ReactHeightBracket extends React.Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ReactHeightBracket;
