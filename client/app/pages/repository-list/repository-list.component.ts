import { Component, OnInit } from '@angular/core'

import Group from '../../../../server/models/Group'
import Repository from '../../../../server/models/Repository'
import { RepositoryService } from '../../service/repository.service'
import { GroupService } from '../../service/group.service'

@Component({
  moduleId: module.id,
  selector: 'commit-list',
  templateUrl: __uri('./repository-list.component.html'),
})
export class RepositoryListComponent implements OnInit {
  repositoryList: Repository[] = []

  groupList: Group[] = []

  constructor (private repositoryService: RepositoryService,
               private groupService: GroupService,) {
  }

  getRepositoryList () {
    this.repositoryService.getRepositoryList().then(commints => {
      this.repositoryList = commints
    })
  }

  ngOnInit () {
    this.getRepositoryList()

    this.groupService.getGroupList().then(groupList => {
      this.groupList = groupList
    })
  }

}
