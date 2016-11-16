import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout-main.html';
import './layout-main.less';

/* Includes */
import '../includes/footer/footer.js';

/* All pages available for this Layout */
import '../pages/compare-page/compare-page.js';


Template.LayoutMain.onCreated(function LayoutMainCreated() {
  let instance = this

  // Handle current page as Dict
  instance.page = new ReactiveDict()
  instance.page.set('template', instance.data.main())
  instance.page.set('path', FlowRouter.current().path)
  instance.page.set('name', FlowRouter.current().route.name)

  // Handle items here (easier to manage)
  instance.items = new ReactiveDict()
  instance.items.set('solid', [])
  instance.items.set('liquid', [])

  Tracker.autorun(function() {
    FlowRouter.watchPathChange()

    let current = FlowRouter.current()
    if (instance.page.get('path') !== current.path) {
        instance.page.set('template', instance.data.main())
        instance.page.set('path', current.path)
        instance.page.set('name', current.route.name)
    }
  })
});

Template.LayoutMain.helpers({
  getLayoutClasses() {
    let instance = Template.instance()
    return ''
      + ((instance.page.get('template') === 'ComparePage') ? 'footer-displayed' : 'footer-hidden')
  },

  getNavClass(route_name) {
    return (route_name === Template.instance().page.get('name')) ? 'active' : ''
  },

  // Page
  getPageTemplate() {
    return Template.instance().page.get('template')
  },
  getPageData() {
    let instance = Template.instance()
    if (instance.page.get('template') !== 'ComparePage') {
      return {}
    }

    let type = instance.data.type()
    console.log("Page data", {
      type: type,
      items: instance.items.get(type)
    })
    return {
      type: type,
      items: instance.items.get(type)
    }
  },

  // Footer
  getFooterData() {
    let instance = Template.instance()
    return {
      onAdd: function() {
        console.log("On add")
        let type = instance.data.type()
        if (!type) {
          return
        }
        let items = instance.items.get(type)
        items.push({})
        console.log("items", items)
        instance.items.set(type, items)
      }
    }
  }

});

Template.LayoutMain.events({
});
