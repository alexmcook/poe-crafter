import * as React from 'react';
import * as _ from 'lodash';
import { Requirement } from '../utils/base';

interface RequirementProps {
  requirement: Requirement;
}

class Requirements extends React.Component<RequirementProps> {
  render() {
    let elements: JSX.Element[] = [];
    var prefix = <span key="prefix">Requires </span>;
    if (this.props.requirement.level > 2) {
      elements.push(
        <span key="level">
          <span>Level </span>
          <span className="text--normal">{this.props.requirement.level}</span>
        </span>
      );
    }
    if (this.props.requirement.str > 14) {
      elements.push(
        <span key="str">
          <span className="text--normal">{this.props.requirement.str}</span>
          <span> Str</span>
        </span>
      );
    }
    if (this.props.requirement.dex > 14) {
      elements.push(
        <span key="dex">
          <span className="text--normal">{this.props.requirement.dex}</span>
          <span> Dex</span>
        </span>
      );
    }
    if (this.props.requirement.int > 14) {
      elements.push(
        <span key="int">
          <span className="text--normal">{this.props.requirement.int}</span>
          <span> Int</span>
        </span>
      );
    }

    function createComma(key: number): JSX.Element {
      return (
        <span key={'commaRequirement' + key} className="text--descriptor">
          ,{' '}
        </span>
      );
    }

    let output: {}[] | undefined = undefined;
    if (elements.length > 0) {
      output = [
        prefix,
        _.reduce(
          elements,
          (result: {}[], element, index) => {
            if (result.length > 0) {
              result.push(createComma(index));
            }
            result.push(element);
            return result;
          },
          []
        )
      ];
    }

    return <div className="text--descriptor">{output}</div>;
  }
}

export default Requirements;
