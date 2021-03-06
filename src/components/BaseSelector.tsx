import * as React from 'react';
import * as _ from 'lodash';
import { Dropdown, DropdownItemProps, Input } from 'semantic-ui-react';
import Item from '../utils/item';
import Base from '../utils/base';

interface BaseSelectorProps {
  bases: Base[];
  selectBase: (value: string) => { type: string; payload: string };
  setLevel: (value: number) => { type: string; payload: number };
  currentItem: Item;
}

interface BaseSelectorState {
  baseOptions: DropdownItemProps[];
  initialBase: DropdownItemProps;
}

class BaseSelector extends React.Component<
  BaseSelectorProps,
  BaseSelectorState
> {
  constructor(props: BaseSelectorProps) {
    super(props);
    let baseOptions: DropdownItemProps[] = [];
    _.each(this.props.bases, base => {
      baseOptions.push({ key: base.id, text: base.name, value: base.id });
    });
    this.state = {
      baseOptions: baseOptions,
      initialBase: this.props.bases[0]
    };
  }

  componentWillMount() {
    let initialBase = _.find(this.state.baseOptions, base => {
      return base.key === this.props.currentItem.id;
    });
    if (initialBase) {
      this.setState({ initialBase: initialBase });
    }
  }

  handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    let value = parseInt((e.target as HTMLInputElement).value, 10);
    if (value > 100) {
      value = 100;
    } else if (value < 1) {
      value = 1;
    }
    this.props.setLevel(value);
  }

  render() {
    return (
      <div>
        <div
          className="drop-shadow--btn"
          style={{ display: 'inline-block', borderRadius: '5px' }}
        >
          <Dropdown
            key="dropdown"
            placeholder="Select Base"
            search={true}
            selection={true}
            selectOnNavigation={false}
            selectOnBlur={false}
            options={this.state.baseOptions}
            onChange={(event, target) =>
              this.props.selectBase(target.value as string)
            }
            defaultValue={this.state.initialBase.value}
          />
        </div>
        <div
          className="drop-shadow--btn"
          style={{
            display: 'inline-block',
            borderRadius: '5px',
            marginLeft: '10px'
          }}
        >
          <Input
            key="input"
            label="Level"
            type="number"
            min="1"
            max="100"
            onChange={e => this.handleChange(e)}
            value={this.props.currentItem.itemLevel}
          />
        </div>
      </div>
    );
  }
}

export default BaseSelector;
