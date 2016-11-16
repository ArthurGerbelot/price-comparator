import { ReactiveVar } from 'meteor/reactive-var';

import './compare-page.html';
import './compare-page.less';

Template.ComparePage.onCreated(function onCompareCreated() {
  let instance = this

  instance.list = new ReactiveVar([])

  Tracker.autorun(function() {
    FlowRouter.watchPathChange()
  })
})

Template.ComparePage.helpers({
  getList() {
    console.log("get List ", Template.instance().data)
    return Template.instance().data.items
  }
})

Template.ComparePage.events({
  'click footer'(e) {
    console.log("footer")
  }
})