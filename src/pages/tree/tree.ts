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
        id: '00/01',
        value: '有个项目组名字也不短',
        children: [
          {
            id: '00/01/01',
            value: '小组AAAAAAA'
          },
          {
            id: '00/01/02',
            value: '小组BBBBBBB'
          },
          {
            id: '00/01/03',
            value: '小组CCCCCCC'
          },
          {
            id: '00/01/04',
            value: '小组DDDDDDD'
          },
          {
            id: '00/01/05',
            value: '小组EEEEEEE'
          }
        ]
      },
      {
        id: '00/02',
        value: '有个市场部',
        children: [
          {
            id: '00/02/01',
            value: '小组HHHHHH'
          },
          {
            id: '00/02/02',
            value: '小组IIIIII'
          },
          {
            id: '00/02/03',
            value: '小组GGGGGG'
          },
          {
            id: '00/02/04',
            value: '小组MMMMMM',
            children: [
              {
                id: '00/02/03/01',
                value: '特别忙小队'
              }
            ]
          }
        ]
      },
      {
        id: '00/03',
        value: '有个后勤部',
        children: [
          {
            id: '00/03/01',
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

  getParents(node) {
    let paths = node.id.split('/');
    let ids = [];
    ids.push(paths.shift());
    let nodes = [];
    let currentNode = this.treeData;
    nodes.push(currentNode);

    paths.forEach((id) => {
      ids.push(id);
      if (currentNode.children) {
        let child = currentNode.children.find((n) => {
          return n.id === ids.join('/');
        });
        if (child) {
          nodes.push(child);
          currentNode = child;
        }
      }
    });
    return nodes;
  }


  switch(node?: TreeModel) {
    if (node) {
      this.current = node;
      this.navbar = this.getParents(node);
    }
  }

  add() {
    console.log('新增部门 ..');
  }

  edit(node) {

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
