import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout-main.html';
import './layout-main.less';

/* All pages available for this Layout */
import '../includes/footer/footer.js';

/* All pages available for this Layout */
import '../pages/home-page/home-page.js';


Template.LayoutMain.onCreated(function LayoutMainCreated() {
  let instance = this

  // Handle current page as Dict
  instance.page = new ReactiveDict()
  instance.page.set('template', instance.data.main())
  instance.page.set('path', FlowRouter.current().path)

  Tracker.autorun(function() {
    FlowRouter.watchPathChange()

    let path = FlowRouter.current().path
    if (instance.page.get('path') !== path) {
        instance.page.set('template', instance.data.main())
        instance.page.set('path', path)
    }
  })
});

Template.LayoutMain.helpers({
  getPageTemplate() {
    return Template.instance().page.get('template')
  },
});

Template.LayoutMain.events({
});
