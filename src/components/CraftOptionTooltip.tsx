import * as React from 'react';
import * as _ from 'lodash';

interface CraftOptionTooltipProps {
  types: string[];
  error: number;
}

class CraftOptionTooltip extends React.Component<CraftOptionTooltipProps> {
  private errors = [
    'NONE (Unused)',
    'Item has the wrong base type.',
    'Target is corrupted.',
    'This item already has a crafted Mod.',
    'There are no crafted Mods on this item.',
    'This item already has a mod of this type.',
    'This item may not have another prefix mod.',
    'This item may not have another suffix mod.',
    'This item already has that many sockets.',
    'This item already has those links.',
    'This item doesn\'t have enough sockets.',
    'This item can not have that many sockets.',
    'Item has no sockets.'
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

  getError() {
    if (this.props.error > 0 && this.props.types.length > 0) {
      return (
        <div>
          <br />
          <div className="text--corrupt">{this.errors[this.props.error]}</div>
        </div>
      );
    } else if (this.props.error > 0) {
      return (
        <div className="text--corrupt">{this.errors[this.props.error]}</div>
      );
    } else {
      return null;
    }
  }

  render() {
    const typesList =
      'Can be applied to: ' + this.pluralize(this.props.types).join(', ');
    const error = this.getError();

    return (
      (this.props.types.length > 0 || this.props.error > 0) && (
        <div className="craft-option-tooltip no-select no-pointer-events text--white">
          {this.props.types.length > 0 ? typesList : null}
          {error ? error : null}
        </div>
      )
    );
  }
}

export default CraftOptionTooltip;
