/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';

export default class FilesRoute extends Route {
  classNames = ['noscroll'];

  model(params) {
    let application = this.modelFor('application');
    let ruleValue = application.data[params.id];
    let keys = Object.keys(ruleValue);

    // the keys are ISO dates, so sorting them alphabetically always sorts them
    // in date order too :tada:
    let max = keys.sort((a, b) => a > b)[keys.length - 1];

    // this just returns the most recent list of files
    return {fileList: ruleValue[max], rule: params.id};
  }
}
