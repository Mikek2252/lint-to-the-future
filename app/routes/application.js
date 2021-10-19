import Route from '@ember/routing/route';
import fetch from 'fetch';

import env from 'lint-to-the-future/config/environment';

import timeSeries from 'lint-to-the-future/utils/time-series';

export default class ApplicationRoute extends Route {
  async model() {
    let data = await (await fetch(`${env.rootURL}data.json`)).json();

    return timeSeries(data);
  }
}
