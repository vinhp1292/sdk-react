import React from "react";
import PropTypes from "prop-types";

import { Filter } from "../../controllers/filter";

class DebugFacet extends React.Component {
  /**
   * propTypes
   * @property {Filter} filter Filter instance to debug.
   */
  static get propTypes() {
    return {
      filter: PropTypes.instanceOf(Filter).isRequired
    };
  }

  constructor(props) {
    super(props);

    this.state = { current: props.filter.get(), filter: props.filter.filter() };
  }

  componentDidMount() {
    this.props.filter.register(this.filterChanged);
  }

  filterChanged = () => {
    this.setState({
      current: this.props.filter.get(),
      filter: this.props.filter.filter()
    });
  }

  render() {
    const { current, filter } = this.state;
    const currentDisplay =
      current instanceof Array ? current.join(" ") : current;
    return (
      <span>{filter || "<empty>"}</span>
    );
  }
}

export { DebugFacet };