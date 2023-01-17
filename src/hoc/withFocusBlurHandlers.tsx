import React, { FocusEvent } from "react";
import {
  sendBlurStatus,
  sendFocusStatus,
  startBlockListening,
  stopBlockListening,
} from "../store/reducers/block";
import { AppDispatch } from "../store/store";
import { BlockNames } from "../types/block-data";

export type BlockComponentProps = {
  isShow: boolean;
  onFocus: ({ currentTarget }: FocusEvent<HTMLInputElement>) => void;
  onBlur: ({ currentTarget }: FocusEvent<HTMLInputElement>) => void;
};

function withFocusBlurHandlers(
  WrappedComponent: React.FC<BlockComponentProps>,
  blockName: BlockNames,
  showBlocks: string[],
  dispatch: AppDispatch
) {
  return class extends React.Component {
    isShow: boolean;
    constructor(props: {} | Readonly<{}>) {
      super(props);
      this.isShow = showBlocks.includes(blockName);
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
      if (this.isShow) {
        dispatch(startBlockListening(blockName));
      }
    }

    componentWillUnmount() {
      if (this.isShow) {
        dispatch(stopBlockListening(blockName));
      }
    }

    handleFocus({ currentTarget }: FocusEvent<HTMLInputElement>) {
      dispatch(sendFocusStatus(blockName, currentTarget.id));
    }

    handleBlur({ currentTarget }: FocusEvent<HTMLInputElement>) {
      dispatch(sendBlurStatus(blockName, currentTarget.id));
    }

    render() {
      return (
        <WrappedComponent
          isShow={this.isShow}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...this.props}
        />
      );
    }
  };
}

export default withFocusBlurHandlers;
