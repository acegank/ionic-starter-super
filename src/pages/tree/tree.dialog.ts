import { IonicPage } from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import { Page } from "@shared/components/page/page";
import { TreeModel } from "ng2-tree";

@IonicPage({
  segment: 'tree-dialog'
})
@Component({
  selector: 'page-tree-dialog',
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        {{current.value}}
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div class="tree-view">
      <div class="tree-container">
        <div class="tree-content">
            <tree [tree]="tree"
            (nodeSelected)="onNodeSelected($event)">
            </tree>
        </div>
      </div>
    </div>
  </ion-content>
  `
})
export class TreeDialogPage extends Page implements OnInit {


  tree: TreeModel;
  current: TreeModel;
  public settings = {
    'static': true,
    'rightMenu': true,
    'leftMenu': true,
    'cssClasses': {
      'expanded': 'fa fa-caret-down fa-lg',
      'collapsed': 'fa fa-caret-right fa-lg',
      'leaf': 'fa fa-lg',
      'empty': 'fa fa-caret-right disabled'
    },
    'templates': {
      'node': '<i class="fa fa-folder-o fa-lg"></i>',
      'leaf': '<i class="fa fa-file-o fa-lg"></i>',
      'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
    }
  };

  ngOnInit(): void {
    this.tree = this.navParams.get('tree');
    this.current = this.navParams.get('current');
    this.tree.settings = this.settings;
    this.app.setTitle(this.current.value.toString());
  }

  public onNodeSelected(e): void {
    // this.dismiss(e);
    this.current = e.node;

    this.app.setTitle(e.node.value.toString());
    this.dismiss(e);
  }

}
