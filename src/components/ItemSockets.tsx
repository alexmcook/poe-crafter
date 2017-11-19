import * as React from 'react';
const socketLink = require('../assets/item/socketLink.png');
const socketLinkV = require('../assets/item/socketLinkVertical.png');
const socketR = require('../assets/item/socketR.png');
const socketG = require('../assets/item/socketG.png');
const socketB = require('../assets/item/socketB.png');
const socketW = require('../assets/item/socketW.png');

interface ItemSocketsProps {
  width: number;
  height: number;
  x: number;
  y: number;
  itemSockets: string;
  itemLinks: string;
  vertical: boolean;
  craftingTab?: boolean;
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
      case 'W':
        return socketW;
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
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 10 / 0.8 : 10}
          y={this.props.craftingTab ? 54 / 0.8 : 54}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 92 / 0.8 : 92}
          y={this.props.craftingTab ? 54 / 0.8 : 54}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[2])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 10 / 0.8 : 10}
          y={this.props.craftingTab ? 138 / 0.8 : 138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[3])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 92 / 0.8 : 92}
          y={this.props.craftingTab ? 138 / 0.8 : 138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[4])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 10 / 0.8 : 10}
          y={this.props.craftingTab ? 222 / 0.8 : 222}
        />
        <image
          style={this.props.itemSockets[5] ? {} : this.hide}
          xlinkHref={this.getSocketColor(this.props.itemSockets[5])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 92 / 0.8 : 92}
          y={this.props.craftingTab ? 222 / 0.8 : 222}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLink}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 32 / 0.8 : 32}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 70 / 0.8 : 70}
        />
        <image
          style={this.getLink(this.props.itemLinks[1])}
          xlinkHref={socketLinkV}
          width={this.props.craftingTab ? 32 / 0.8 : 32}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 107 / 0.8 : 107}
          y={this.props.craftingTab ? 97 / 0.8 : 97}
        />
        <image
          style={this.getLink(this.props.itemLinks[2])}
          xlinkHref={socketLink}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 32 / 0.8 : 32}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 154 / 0.8 : 154}
        />
        <image
          style={this.getLink(this.props.itemLinks[3])}
          xlinkHref={socketLinkV}
          width={this.props.craftingTab ? 32 / 0.8 : 32}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 25 / 0.8 : 25}
          y={this.props.craftingTab ? 181 / 0.8 : 181}
        />
        <image
          style={this.getLink(this.props.itemLinks[4])}
          xlinkHref={socketLink}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 32 / 0.8 : 32}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 238 / 0.8 : 238}
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
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 10 / 0.8 : 10}
          y={this.props.craftingTab ? 96 / 0.8 : 96}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 92 / 0.8 : 92}
          y={this.props.craftingTab ? 96 / 0.8 : 96}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[2])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 92 / 0.8 : 92}
          y={this.props.craftingTab ? 180 / 0.8 : 180}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[3])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 10 / 0.8 : 10}
          y={this.props.craftingTab ? 180 / 0.8 : 180}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLink}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 32 / 0.8 : 32}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 112 / 0.8 : 112}
        />
        <image
          style={this.getLink(this.props.itemLinks[1])}
          xlinkHref={socketLinkV}
          width={this.props.craftingTab ? 32 / 0.8 : 32}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 107 / 0.8 : 107}
          y={this.props.craftingTab ? 139 / 0.8 : 139}
        />
        <image
          style={this.getLink(this.props.itemLinks[2])}
          xlinkHref={socketLink}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 32 / 0.8 : 32}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 196 / 0.8 : 196}
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
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 10 / 0.8 : 10}
          y={this.props.craftingTab ? 138 / 0.8 : 138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 92 / 0.8 : 92}
          y={this.props.craftingTab ? 138 / 0.8 : 138}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLink}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 32 / 0.8 : 32}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 154 / 0.8 : 154}
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
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 138 / 0.8 : 138}
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
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 54 / 0.8 : 54}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 138 / 0.8 : 138}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[2])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 222 / 0.8 : 222}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLinkV}
          width={this.props.craftingTab ? 32 / 0.8 : 32}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 66 / 0.8 : 66}
          y={this.props.craftingTab ? 97 / 0.8 : 97}
        />
        <image
          style={this.getLink(this.props.itemLinks[1])}
          xlinkHref={socketLinkV}
          width={this.props.craftingTab ? 32 / 0.8 : 32}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 66 / 0.8 : 66}
          y={this.props.craftingTab ? 181 / 0.8 : 181}
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
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 96 / 0.8 : 96}
        />
        <image
          xlinkHref={this.getSocketColor(this.props.itemSockets[1])}
          width={this.props.craftingTab ? 64 / 0.8 : 64}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 51 / 0.8 : 51}
          y={this.props.craftingTab ? 180 / 0.8 : 180}
        />

        <image
          style={this.getLink(this.props.itemLinks[0])}
          xlinkHref={socketLinkV}
          width={this.props.craftingTab ? 32 / 0.8 : 32}
          height={this.props.craftingTab ? 64 / 0.8 : 64}
          x={this.props.craftingTab ? 66 / 0.8 : 66}
          y={this.props.craftingTab ? 139 / 0.8 : 139}
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
