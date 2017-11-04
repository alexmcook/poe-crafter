import * as React from 'react';
const socketLink = require('../assets/item/socketLink.png');
const socketLinkV = require('../assets/item/socketLinkVertical.png');
const socketR = require('../assets/item/socketR.png');
const socketG = require('../assets/item/socketG.png');
const socketB = require('../assets/item/socketB.png');
// const socketW = require('../assets/item/socketW.png');

interface ItemSocketsProps {
  width: number;
  height: number;
  x: number;
  y: number;
  itemSockets: string;
  itemLinks: string;
  vertical: boolean;
}

class ItemSockets extends React.Component<ItemSocketsProps> {
  private hide: object = {
    visibility: 'hidden'
  };

  getSocketColor(socket: string): string {
    switch (socket) {
      case 'R':
        return socketR;
      case 'G':
        return socketG;
      case 'B':
        return socketB;
      default:
        return '';
    }
  }

  getLink(link: string): object {
    switch (link) {
      case 'L':
        return {};
      case 'X':
        return this.hide;
      default:
        return this.hide;
    }
  }

  socketsSix(): JSX.Element {
    return (
      <svg
        className="no-pointer-events"
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
      >
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[0])}
          width={64}
          height={64}
          x={10}
          y={54}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={64}
          height={64}
          x={92}
          y={54}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[2])}
          width={64}
          height={64}
          x={10}
          y={138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[3])}
          width={64}
          height={64}
          x={92}
          y={138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[4])}
          width={64}
          height={64}
          x={10}
          y={222}
        />
        <image
          style={this.props.itemSockets[5] ? {} : this.hide}
          xlinkHref={this.getSocketColor(this.props.itemSockets[5])}
          width={64}
          height={64}
          x={92}
          y={222}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLink}
          width={64}
          height={32}
          x={51}
          y={70}
        />
        <image
          style={this.getLink(this.props.itemLinks[1])}
          xlinkHref={socketLinkV}
          width={32}
          height={64}
          x={107}
          y={97}
        />
        <image
          style={this.getLink(this.props.itemLinks[2])}
          xlinkHref={socketLink}
          width={64}
          height={32}
          x={51}
          y={154}
        />
        <image
          style={this.getLink(this.props.itemLinks[3])}
          xlinkHref={socketLinkV}
          width={32}
          height={64}
          x={25}
          y={181}
        />
        <image
          style={this.getLink(this.props.itemLinks[4])}
          xlinkHref={socketLink}
          width={64}
          height={32}
          x={51}
          y={238}
        />
      </svg>
    );
  }

  socketsFour(): JSX.Element {
    return (
      <svg
        className="no-pointer-events"
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
      >
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[0])}
          width={64}
          height={64}
          x={10}
          y={96}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={64}
          height={64}
          x={92}
          y={96}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[2])}
          width={64}
          height={64}
          x={92}
          y={180}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[3])}
          width={64}
          height={64}
          x={10}
          y={180}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLink}
          width={64}
          height={32}
          x={51}
          y={112}
        />
        <image
          style={this.getLink(this.props.itemLinks[1])}
          xlinkHref={socketLinkV}
          width={32}
          height={64}
          x={107}
          y={139}
        />
        <image
          style={this.getLink(this.props.itemLinks[2])}
          xlinkHref={socketLink}
          width={64}
          height={32}
          x={51}
          y={196}
        />
      </svg>
    );
  }

  socketsTwo(): JSX.Element {
    return (
      <svg
        className="no-pointer-events"
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
      >
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[0])}
          width={64}
          height={64}
          x={10}
          y={138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={64}
          height={64}
          x={92}
          y={138}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLink}
          width={64}
          height={32}
          x={51}
          y={154}
        />
      </svg>
    );
  }

  socketsOne(): JSX.Element {
    return (
      <svg
        className="no-pointer-events"
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
      >
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[0])}
          width={64}
          height={64}
          x={51}
          y={138}
        />
      </svg>
    );
  }

  socketsThreeV(): JSX.Element {
    return (
      <svg
        className="no-pointer-events"
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
      >
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[0])}
          width={64}
          height={64}
          x={51}
          y={54}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={64}
          height={64}
          x={51}
          y={138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[2])}
          width={64}
          height={64}
          x={51}
          y={222}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLinkV}
          width={32}
          height={64}
          x={66}
          y={97}
        />
        <image
          style={this.getLink(this.props.itemLinks[1])}
          xlinkHref={socketLinkV}
          width={32}
          height={64}
          x={66}
          y={181}
        />
      </svg>
    );
  }

  socketsTwoV(): JSX.Element {
    return (
      <svg
        className="no-pointer-events"
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
      >
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[0])}
          width={64}
          height={64}
          x={51}
          y={96}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={64}
          height={64}
          x={51}
          y={180}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLinkV}
          width={32}
          height={64}
          x={66}
          y={139}
        />
      </svg>
    );
  }

  render() {
    switch (this.props.itemSockets.length) {
      case 6:
        return this.socketsSix();
      case 5:
        return this.socketsSix();
      case 4:
        return this.socketsFour();
      case 3:
        if (this.props.vertical) {
          return this.socketsThreeV();
        } else {
          return this.socketsFour();
        }
      case 2:
        if (this.props.vertical) {
          return this.socketsTwoV();
        } else {
          return this.socketsTwo();
        }
      case 1:
        return this.socketsOne();
      default:
        return null;
    }
  }
}

export default ItemSockets;
