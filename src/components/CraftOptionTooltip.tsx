import * as React from 'react';
import * as _ from 'lodash';

interface CraftOptionTooltipProps {
  types: string[];
  error: number;
}

class CraftOptionTooltip extends React.Component<CraftOptionTooltipProps> {
  private errors = [
    (
    <div key="error1" className="text--corrupt">
      Item has the wrong base type.
    </div>
    ),
    (
    <div key="error2" className="text--corrupt">
      Target is corrupted.
    </div>
    ),
    (
    <div key="error3" className="text--corrupt">
      This item already has a crafted Mod.
    </div>
    ),
    (
    <div key="error4" className="text--corrupt">
      There are no crafted Mods on this item.
    </div>
    ),
    (
    <div key="error5" className="text--corrupt">
      This item already has a mod of this type.
    </div>
    ),
    (
    <div key="error6" className="text--corrupt">
      This item may not have another prefix mod.
    </div>
    ),
    (
    <div key="error7" className="text--corrupt">
      This item may not have another suffix mod.
    </div>
    ),
    (
    <div key="error8" className="text--corrupt">
      This item already has that many sockets.
    </div>
    ),
    (
    <div key="error9" className="text--corrupt">
      This item already has those links.
    </div>
    ),
    (
    <div key="error10" className="text--corrupt">
      This item doesn't have enough sockets.
    </div>
    ),
    (
    <div key="error11" className="text--corrupt">
      This item can not have that many sockets.
    </div>
    )
  ];
  pluralize(types: string[]): string[] {
    let pluralized = _.reduce(
      types,
      (result: string[], type: string) => {
        let plural;
        if (type === 'Staff') {
          plural = 'Staves';
        } else {
          plural = type[type.length - 1] === 's' ? type : type + 's';
        }
        result.push(plural);
        return result;
      },
      []
    );
    return pluralized;
  }

  getTextWidth(text: string): number {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (context) {
      context.font = '12pt Fontin-Regular';
      let metrics = context.measureText(text);
      return metrics.width;
    } else {
      return -1;
    }
  }

  getTypesList(typesLine: string[]): string[] {
    let n = 1;
    let tempJoin = typesLine.slice(0, n).join(' ');
    let width = this.getTextWidth(tempJoin);
    while (width < 520 && n < typesLine.length) {
      n++;
      tempJoin = typesLine.slice(0, n).join(' ');
      width = this.getTextWidth(tempJoin);
    }
    tempJoin = typesLine.slice(0, n).join(' ');
    width = this.getTextWidth(tempJoin);
    let line = width < 520 ? tempJoin : typesLine.slice(0, n - 1).join(' ');
    let next: string[] = [];
    if (n < typesLine.length) {
      next = this.getTypesList(typesLine.slice(n - 1));
    }
    let lines = next.length > 0 ? _.concat(line, next) : [line];
    return lines;
  }

  render() {
    const typesList = ('Can be applied to: ' +
      this.pluralize(this.props.types).join(', ')
    ).split(' ');

    const lines = this.getTypesList(typesList);
    const output = _.reduce(
      lines,
      (result: JSX.Element[], line: string, index: number) => {
        result.push(
          <div key={'typesLine' + index} className="text--white">
            {line}
          </div>
        );
        return result;
      },
      []
    );
    
    return (
      (this.props.types.length > 0 || this.props.error > 0) && (
        <div className="craft-option-tooltip no-select no-pointer-events">
          {this.props.types.length > 0 ? output : null}
          {this.props.error !== 0 && this.props.types.length > 0 ? (
            <br />
          ) : null}
          {this.props.error > 0 ? this.errors[this.props.error - 1] : null}
        </div>
      )
    );
  }
}

export default CraftOptionTooltip;
