const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaultConfig,
  entry: {
    circletext: './blocks/circletext',
    circletext_frontend: './blocks/circletext/circletext_frontend.js',
    events_frontend: './blocks/events/events_frontend.js',
    employees: './blocks/employees',
    "employee-single": './blocks/employee-single',
    events: './blocks/events',
    "event-single": './blocks/event-single',
    jobs: './blocks/jobs',
    miniimage: './blocks/miniimage',
    partners: './blocks/partners',
    veranstaltungen: './blocks/veranstaltungen/',
    "language-switcher": './blocks/language-switcher/',
    "heading": './extentions/heading/',
  },
}
