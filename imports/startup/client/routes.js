import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '../../ui/layout/layout-main'

FlowRouter.route('/', {
  name: 'App.compare.solid',
  action() {
    BlazeLayout.render('LayoutMain', {main: 'ComparePage', type: 'solid'})
  }
})
FlowRouter.route('/liquid', {
  name: 'App.compare.liquid',
  action() {
    BlazeLayout.render('LayoutMain', {main: 'ComparePage', type: 'liquid'})
  }
})
FlowRouter.route('/settings', {
  name: 'App.settings',
  action() {
    BlazeLayout.render('LayoutMain', {main: 'SeetingsPage'})
  }
})
FlowRouter.route('/share', {
  name: 'App.share',
  action() {
    BlazeLayout.render('LayoutMain', {main: 'SharePage'})
  }
})