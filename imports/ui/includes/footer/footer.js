
import './footer.html';
import './footer.less';

Template.Footer.helpers({
  year() {
    return new Date().getFullYear()
  },
});
Template.Footer.events({
  'click .add'(e, instance) {
    e.preventDefault()
    console.log("Ok!", instance.data)
    console.log("Ok!", typeof instance.data.onAdd)
    if (typeof instance.data.onAdd === 'function') {
      console.log("call")
      instance.data.onAdd()
    }
  }
})