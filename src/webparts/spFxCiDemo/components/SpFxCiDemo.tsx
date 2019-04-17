import * as React from 'react';
import styles from './SpFxCiDemo.module.scss';
import { ISpFxCiDemoProps } from './ISpFxCiDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxCiDemo extends React.Component<ISpFxCiDemoProps, {}> {
  public render(): React.ReactElement<ISpFxCiDemoProps> {
    return (
      <div className={ styles.spFxCiDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Add package to APP Catalog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
