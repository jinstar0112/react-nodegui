import {
  QLineEdit,
  EchoMode,
  NodeWidget,
  QLineEditSignals
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface LineEditProps extends ViewProps<QLineEditSignals> {
  text?: string;
  placeholderText?: string;
  readOnly?: boolean;
  echoMode?: EchoMode;
}

const setLineEditProps = (
  widget: RNLineEdit,
  newProps: LineEditProps,
  oldProps: LineEditProps
) => {
  const setter: LineEditProps = {
    set text(text: string) {
      text ? widget.setText(text) : widget.clear();
    },
    set placeholderText(text: string) {
      widget.setPlaceholderText(text);
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    },
    set echoMode(mode: EchoMode) {
      widget.setEchoMode(mode);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNLineEdit extends QLineEdit implements RNWidget {
  setProps(newProps: LineEditProps, oldProps: LineEditProps): void {
    setLineEditProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "linedit";
}
