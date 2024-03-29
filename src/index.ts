import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @eco32i/jupyterlab_solarized_light extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@eco32i/jupyterlab_solarized_light:plugin',
  description: 'Solarized Light version of the default jupyterlab light theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @eco32i/jupyterlab_solarized_light is activated!');
    const style = '@eco32i/jupyterlab_solarized_light/index.css';

    manager.register({
      name: '@eco32i/jupyterlab_solarized_light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
