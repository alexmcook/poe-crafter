import * as React from 'react';
import * as _ from 'lodash';
import { Grid, Dropdown, DropdownItemProps, Button } from 'semantic-ui-react';
import Base from '../utils/base';

interface BaseSelectorProps {
  bases: Base[];
  selectBase: (value: string) => { type: string; payload: string };
  changeTab: (value: string) => { type: string; payload: string };
}

interface BaseSelectorState {
  baseOptions: DropdownItemProps[];
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
      baseOptions: baseOptions
    };
  }

  render() {
    return (
      <Grid.Row centered={true} columns={2}>
        <br />
        <Grid.Row centered={true}>
          <Button onClick={() => this.props.changeTab('Currency')}>
            Currency
          </Button>
          <Button onClick={() => this.props.changeTab('Essence')}>
            Essence
          </Button>
          <Button onClick={() => this.props.changeTab('Crafting')}>
            Crafting
          </Button>
        </Grid.Row>
        <br />
        <Grid.Row centered={true}>
          <Dropdown
            placeholder="Select Base"
            search={true}
            selection={true}
            selectOnNavigation={false}
            options={this.state.baseOptions}
            onChange={(event, target) =>
              this.props.selectBase(target.value as string)}
          />
        </Grid.Row>
      </Grid.Row>
    );
  }
}

export default BaseSelector;
