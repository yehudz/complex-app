import {Template} from 'meteor/templating';
// import toastr from 'toastr';

Template.AddTaskComponent.events({
    'click button':(e, template)=> {
        let name = template.find('.nameInput');
        let description = template.find('.descriptionInput');
        let params = {
            name: name.value,
            description: description.value
        }
        Meteor.call('addTask', params, (err, res)=> {
            if (res) {
                name.value = '';
                description.value = '';
                toastr.success('Task Added')
            }
        }) 
    },
    'keyup input':(e, template)=> {
        if (e.key === 'Enter') {
            let name = template.find('.nameInput');
            let description = template.find('.descriptionInput');
            let params = {
                name: name.value,
                description: description.value
            }
            Meteor.call('addTask', params, (err, res)=> {
                if (res) {
                    name.value = '';
                    description.value = '';
                    toastr.success('Task Added')
                }
            }) 
        }
    }
})