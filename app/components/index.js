import React        from 'react';
// Components
import Cta          from './index/cta';
import Icons        from './index/icons';
import About        from './index/about';
import Value        from './index/value';
import SecondaryCta from './index/secondary_cta';
import Testimonials from './index/testimonials';
import Social       from './index/social';
import GoogleMap    from './index/google_map';

// Stores
import GlobalStore  from '../stores/GlobalStore';
// Actions
import GlobalActionCreators from '../actions/GlobalActionCreators';

import $ from 'jquery';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      globals: GlobalStore.getGlobals(),
      errors: []
    };
  }

  componentWillMount() {
    $('body').addClass('home-page');
  }

  componentDidMount() {
    GlobalStore.addChangeListener(this._onChange);
    GlobalActionCreators.loadGlobals();
  }

  componentWillUnmount() {
    $('body').removeClass('home-page');
    GlobalStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      globals: GlobalStore.getGlobals(),
      errors: GlobalStore.getErrors()
    });
  }

  render() {
    return (
      <div>
        <Cta facility={this.props.facility}/>
        <Icons
          city={this.props.facility.city}
          category={this.props.facility.category}>
        </Icons>
        <About

          name={this.props.facility.name}
          description={this.props.facility.description}>
        </About>
        <Value points={this.state.globals.points}/>
        <SecondaryCta
          cta={this.state.globals.cta}/>
        <Testimonials testimonials={this.state.globals.testimonials} />
        <Social profile={this.state.globals.profile}/>
      </div>
    );
  }
}

export default Index;
