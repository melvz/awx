/*********************************************
 *  Copyright (c) 2013 AnsibleWorks, Inc.
 *
 *  InventorySummary.js 
 *
 *  Summary of groups contained within an inventory
 * 
 */
angular.module('InventorySummaryDefinition', [])
    .value(
    'InventorySummary', {

        name: 'groups',
        iterator: 'group',
        editTitle: '{{ inventory_name }}',
        showTitle: true,
        well: true,
        index: false,
        hover: true,
        
        fields: {
            name: {
                key: true,
                label: 'Group',
                ngClick: "\{\{ 'GroupsEdit(' + group.id + ')' \}\}",
                columnClass: 'col-lg-3 col-md3 col-sm-2'
                },
            failed_hosts: {
                label: 'Failed Hosts',
                ngHref: "\{\{ group.failed_hosts_link \}\}",
                badgeIcon: "\{\{ 'icon-failures-' + group.failed_hosts_class \}\}",
                badgeNgHref: "\{\{ group.failed_hosts_link \}\}",
                badgePlacement: 'left',
                badgeToolTip: "\{\{ group.failed_hosts_tip \}\}",
                badgeTipPlacement: 'top',
                awToolTip: "\{\{ group.failed_hosts_tip \}\}",
                dataPlacement: "top",
                searchable: false,
                excludeModal: true,
                sortField: "hosts_with_active_failures"
                },
            status: {
                label: 'Status',
                ngClick: "viewUpdateStatus(\{\{ group.id \}\})",
                searchType: 'select',
                badgeIcon: "\{\{ 'icon-cloud-' + group.status_badge_class \}\}",
                badgeToolTip: "\{\{ group.status_badge_tooltip \}\}",
                awToolTip: "\{\{ group.status_badge_tooltip \}\}",
                dataPlacement: 'top',
                badgeTipPlacement: 'top',
                badgePlacement: 'left',
                searchOptions: [
                    { name: "failed", value: "failed" },
                    { name: "never", value: "never updated" },
                    { name: "n/a", value: "none" },
                    { name: "successful", value: "successful" },
                    { name: "updating", value: "updating" }],
                sourceModel: 'inventory_source',
                sourceField: 'status'
                },
            last_updated: {
                label: 'Last<br>Updated',
                sourceModel: 'inventory_source',
                sourceField: 'last_updated',
                searchable: false,
                nosort: false
                },
            source: {
                label: 'Source',
                searchType: 'select',
                searchOptions: [
                    { name: "ec2", value: "ec2" },
                    { name: "none", value: "" },
                    { name: "rackspace", value: "rackspace" }],
                sourceModel: 'inventory_source',
                sourceField: 'source',
                searchOnly: true
                },
            has_external_source: {
                label: 'Has external source?', 
                searchType: 'in', 
                searchValue: 'ec2,rackspace',
                searchOnly: true,
                sourceModel: 'inventory_source',
                sourceField: 'source'
                },
            has_active_failures: {
                label: 'Has failed hosts?',
                searchSingleValue: true,
                searchType: 'boolean',
                searchValue: 'true',
                searchOnly: true
                },
            last_update_failed: {
                label: 'Update failed?',
                searchType: 'select',
                searchSingleValue: true,
                searchValue: 'failed',
                searchOnly: true,
                sourceModel: 'inventory_source',
                sourceField: 'status'
                }
            },

        actions: {
            create: {
                label: 'Create New',
                mode: 'all',
                icon: 'icon-plus',
                'class': "btn-success btn-xs", 
                ngClick: "createGroup()",
                ngHide: "groupCreateHide", 
                ngDisabled: 'grpBtnDisabled',
                awToolTip: "Create a new top-level group", 
                dataPlacement: 'top'
                },
            help: {
                dataPlacement: 'top',
                icon: "icon-question-sign",
                mode: 'all',
                'class': 'btn-xs btn-info btn-help',
                awToolTip: "<div style=\"padding-top:10px; text-align: left;\"><p>Need help getting started creating your inventory?</p>" +
                    "<p>Click here for help with this page</p></div>",
                iconSize: 'large',
                ngClick: "showHelp()",
                id: "inventory-summary-help"
                },
            refresh: {
                awRefresh: true,
                mode: 'all'
                }
            },

        fieldActions: {
            group_update: {
                label: 'Update',
                icon: 'icon-cloud-download',
                "class": 'btn-xs btn-success',
                ngClick: 'updateGroup(\{\{ group.id \}\})',
                awToolTip: 'Perform an update on this group'     
                },
            cancel: {
                label: 'Cancel',
                icon: 'icon-minus-sign',
                ngClick: "cancelUpdate(\{\{ group.id \}\}, '\{\{ group.name \}\}')",
                "class": 'btn-danger btn-xs delete-btn',
                awToolTip: 'Cancel a running update process'
                }
            }
    });
            