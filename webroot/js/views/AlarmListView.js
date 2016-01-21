/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

define([
    'underscore',
    'contrail-view',
    'contrail-list-model'
], function (_, ContrailView, ContrailListModel) {
    var AlarmListView = ContrailView.extend({
        el: $(contentContainer),

        render: function () {
            var self = this, viewConfig = this.attributes.viewConfig;
            var remoteAjaxConfig = {
                    remote: {
                        ajaxConfig: {
                            url: cowc.get(cowc.URL_ALARM_DETAILS_IN_CHUNKS, 50, $.now()),
                            type: "GET",
                        },
                        dataParser: coreAlarmUtils.alarmDataParser
                    },
                    cacheConfig: {
                    }
            }
            var contrailListModel = new ContrailListModel(remoteAjaxConfig);
            self.renderView4Config(this.$el, contrailListModel, getAlarmsListViewConfig());
        }
    });

    var getAlarmsListViewConfig = function () {
        return {
            elementId: cowu.formatElementId([cowl.ALARMS_LIST_ID]),
            view: "SectionView",
            viewConfig: {
                rows: [
                    {
                        columns: [
                            {
                                elementId: cowl.MONITOR_ALARM_LIST_ID,
                                title: cowl.TITLE_ALARMS,
                                view: "AlarmGridView",
                                viewPathPrefix: "js/views/",
                                app: cowc.APP_CONTRAIL_CONTROLLER,
                                viewConfig: {projectFQN: null, parentType: 'project', pagerOptions: {options: {pageSize: 10, pageSizeSelect: [10, 50, 100]}}}
                            }
                        ]
                    }
                ]
            }
        }
    };

    return AlarmListView;
});
