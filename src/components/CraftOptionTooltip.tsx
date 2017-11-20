import * as React from 'react';
import * as _ from 'lodash';

interface CraftOptionTooltipProps {
  types: string[];
}

class CraftOptionTooltip extends React.Component<CraftOptionTooltipProps> {
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

  render() {
    const typesList =
      'Can be applied to: ' + this.pluralize(this.props.types).join(', ');
    return (
      this.props.types.length > 0 && (
        <div className="craft-option-tooltip no-select no-pointer-events">
          <div className="item-stats text--white">
            {this.props.types.length > 0 ? typesList : null}
          </div>
        </div>
      )
    );
  }
}

export default CraftOptionTooltip;
