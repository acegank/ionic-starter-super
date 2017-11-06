import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NodeEvent, TreeModel, RenamableNode, Ng2TreeSettings } from 'ng2-tree';
import { Page } from '@shared/components/page/page';
declare const alertify: any;


@IonicPage()
@Component({
  selector: 'page-tree',
  templateUrl: 'tree.html'
})
export class TreePage extends Page implements OnInit {


  treeData: TreeModel = {
    id: '00',
    value: '亿实软件名字很长',
    children: [
      {
        id: '0001',
        value: '有个项目组名字也不短',
        children: [
          {
            id: '000101',
            value: '小组AAAAAAA'
          },
          {
            id: '000102',
            value: '小组BBBBBBB'
          },
          {
            id: '000103',
            value: '小组CCCCCCC'
          },
          {
            id: '000104',
            value: '小组DDDDDDD'
          },
          {
            id: '000105',
            value: '小组EEEEEEE'
          }
        ]
      },
      {
        id: '0002',
        value: '有个市场部',
        children: [
          {
            id: '000201',
            value: '小组HHHHHH'
          },
          {
            id: '000202',
            value: '小组IIIIII'
          },
          { value: '小组GGGGGG' },
          {
            id: '000203',
            value: '小组MMMMMM',
            children: [
              {
                id: '00020301',
                value: '特别忙小队'
              }
            ]
          }
        ]
      },
      {
        id: '0003',
        value: '有个后勤部',
        children: [
          {
            id: '000301',
            value: '超级飞侠'
          }
        ]
      }
    ]
  };

  navbar: TreeModel[] = [];

  current: TreeModel = this.treeData;

  public ngOnInit(): void {
    this.app.setTitle('组织管理');
    this.current = this.treeData;
    this.navbar.push(this.current);
  }

  switch(node?: TreeModel) {
    if (node) {
      this.current = node;
      this.navbar.push(this.current);
    }
  }

  add() {
    console.log('新增部门 ..');
  }

  showTree() {
    this.modalCtrl.open('TreeDialogPage', {
      tree: this.treeData,
      current: this.current
    }, (data) => {
      if (data)
        this.switch(data.node);
    })
  }

}
