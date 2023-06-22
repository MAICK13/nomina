import { DashboardOutlined, UserOutlined, FileAddOutlined, UnorderedListOutlined, SmileOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
    key: 'dashboards',
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: 'sidenav.dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'dashboards-default',
        path: `${APP_PREFIX_PATH}/dashboards/home`,
        title: 'sidenav.dashboard.default',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }]


const employeeNavTree = [{
  key: 'employee',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: DashboardOutlined,
  breadcrumb: true,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-employee-base',
      path: `${APP_PREFIX_PATH}/dashboards/employee/list`,
      title: 'sidenav.employee.default',

      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-employee-list',
          path: `${APP_PREFIX_PATH}/dashboards/employee/list`,
          title: 'sidenav.general.list',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-employee-add',
          path: `${APP_PREFIX_PATH}/dashboards/employee/add`,
          title: 'sidenav.employee.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    },

  ]
}]

const contractNavTree = [{
  key: 'contract',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-contract-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/contract/list`,
      title: 'sidenav.contracts.default',

      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-contract-list',
          path: `${APP_PREFIX_PATH}/dashboards/contract/list`,
          title: 'sidenav.general.list',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-contract-add',
          path: `${APP_PREFIX_PATH}/dashboards/contract/add`,
          title: 'sidenav.contracs.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

  const headingsNavTree = [{
    key: 'headings',
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: '',
    icon: UnorderedListOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'dashboards-headings-base',
        path: `${APP_PREFIX_PATH}/dashboards/headings/list`,
        title: 'sidenav.headings.default',
        breadcrumb: false,
        submenu: [
          {
            key: 'sub-item-dashboards-headings',
            path: `${APP_PREFIX_PATH}/dashboards/headings/list`,
            title: 'sidenav.general.list',
            icon: UnorderedListOutlined,
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'sub-item-dashboards-headings-add',
            path: `${APP_PREFIX_PATH}/dashboards/headings/add`,
            title: 'sidenav.headings.add',
            icon: FileAddOutlined,
            breadcrumb: false,
            submenu: []
          }
        ]
      }

    ]
  }]

const vacationNavTree = [{
  key: 'vacation',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: SmileOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-vacation-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/vacation/list`,
      title: 'sidenav.vacation.default',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-vacation-list',
          path: `${APP_PREFIX_PATH}/dashboards/vacation/list`,
          title: 'sidenav.vacation.default',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-vacation-add',
          path: `${APP_PREFIX_PATH}/dashboards/vacation/add`,
          title: 'sidenav.vacation.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const jobNavTree = [{
  key: 'job',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'job-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/job/list`,
      title: 'sidenav.job',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-job-list',
          path: `${APP_PREFIX_PATH}/dashboards/job/list`,
          title: 'sidenav.general.list',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-job-add',
          path: `${APP_PREFIX_PATH}/dashboards/job/add`,
          title: 'sidenav.job.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const workAreaNavTree = [{
  key: 'work-area',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'work-area-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/work_area/list`,
      title: 'sidenav.work.area',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-work-area-list',
          path: `${APP_PREFIX_PATH}/dashboards/work_area/list`,
          title: 'sidenav.general.list',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-work-area-add',
          path: `${APP_PREFIX_PATH}/dashboards/work_area/add`,
          title: 'sidenav.work.area.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const hourNavTree = [{
  key: 'hour',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'hour-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/hour/list`,
      title: 'sidenav.hour',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-hour-list',
          path: `${APP_PREFIX_PATH}/dashboards/hour/list`,
          title: 'sidenav.general.list',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-hour-add',
          path: `${APP_PREFIX_PATH}/dashboards/hour/add`,
          title: 'sidenav.hour.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const reportNavTree = [{
  key: 'report',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'report-ticket-base',
      path: `${APP_PREFIX_PATH}/dashboards/report/ticket`,
      title: 'sidenav.report',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-report-ticket',
          path: `${APP_PREFIX_PATH}/dashboards/report/ticket`,
          title: 'sidenav.report.ticket',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-report-payroll',
          path: `${APP_PREFIX_PATH}/dashboards/report/payroll`,
          title: 'sidenav.report.payroll',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        },
        // {
        //   key: 'sub-item-upload-payroll',
        //   path: `${APP_PREFIX_PATH}/dashboards/report/upload-payroll`,
        //   title: 'sidenav.report.upload.payroll',
        //   icon: FileAddOutlined,
        //   breadcrumb: false,
        //   submenu: []
        // }
      ]
    }

  ]
}]

const employeePhone = [{
  key: 'employeePhone',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'employee-phone-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/employee_phone/list`,
      title: 'sidenav.employee.phone',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-employee-phone-list',
          path: `${APP_PREFIX_PATH}/dashboards/employee_phone/list`,
          title: 'sidenav.employee.phone',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-employee-phone-add',
          path: `${APP_PREFIX_PATH}/dashboards/employee_phone/add`,
          title: 'sidenav.employee.phone.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const employeeEmail = [{
  key: 'employeeEmail',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'employee-email-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/employee_email/list`,
      title: 'sidenav.employee.email',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-employee-email-list',
          path: `${APP_PREFIX_PATH}/dashboards/employee_email/list`,
          title: 'sidenav.employee.email',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-employee-email-add',
          path: `${APP_PREFIX_PATH}/dashboards/employee_email/add`,
          title: 'sidenav.employee.email.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const employeeAddress = [{
  key: 'employeeAddress',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'employee-address-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/employee_address/list`,
      title: 'sidenav.employee.address',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-employee-address-list',
          path: `${APP_PREFIX_PATH}/dashboards/employee_address/list`,
          title: 'sidenav.employee.address',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-employee-address-add',
          path: `${APP_PREFIX_PATH}/dashboards/employee_address/add`,
          title: 'sidenav.employee.address.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

const employeeItem = [{
  key: 'employeeItem',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: '',
  icon: UnorderedListOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'employee-item-list-base',
      path: `${APP_PREFIX_PATH}/dashboards/employee_item/list`,
      title: 'sidenav.employee.item',
      breadcrumb: false,
      submenu: [
        {
          key: 'sub-item-employee-item-list',
          path: `${APP_PREFIX_PATH}/dashboards/employee_item/list`,
          title: 'sidenav.employee.item',
          icon: UnorderedListOutlined,
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'sub-item-employee-item-add',
          path: `${APP_PREFIX_PATH}/dashboards/employee_item/add`,
          title: 'sidenav.employee.item.add',
          icon: FileAddOutlined,
          breadcrumb: false,
          submenu: []
        }
      ]
    }

  ]
}]

  const navigationConfig = [
    // ...dashBoardNavTree,
    ...employeeNavTree,
    ...employeePhone,
    ...employeeEmail,
    ...employeeAddress,
    ...employeeItem,
    ...headingsNavTree,
    // ...contractNavTree,
    ...vacationNavTree,
    ...jobNavTree,
    ...workAreaNavTree,
    ...hourNavTree,
    ...reportNavTree
  ]





  export default navigationConfig;
