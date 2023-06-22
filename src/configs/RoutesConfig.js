import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },
    {
        key: 'employee.list',
        path: `${APP_PREFIX_PATH}/dashboards/employee/list`,
        component: React.lazy(() => import('views/app-views/dashboards/employee/list')),
    },
    {
        key: 'employee.add',
        path: `${APP_PREFIX_PATH}/dashboards/employee/add`,
        component: React.lazy(() => import('views/app-views/dashboards/employee/add')),
    },
    {
        key: 'employee.edit',
        path: `${APP_PREFIX_PATH}/dashboards/employee/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/employee/edit')),
    },
    {
        key: 'contract.list',
        path: `${APP_PREFIX_PATH}/dashboards/contract/list`,
        component: React.lazy(() => import('views/app-views/dashboards/contract/list')),
    },
    {
        key: 'contract.add',
        path: `${APP_PREFIX_PATH}/dashboards/contract/add`,
        component: React.lazy(() => import('views/app-views/dashboards/contract/add')),
    },
    {
        key: 'headings.list',
        path: `${APP_PREFIX_PATH}/dashboards/headings/list`,
        component: React.lazy(() => import('views/app-views/dashboards/headings/list')),
    },
    {
        key: 'headings.add',
        path: `${APP_PREFIX_PATH}/dashboards/headings/add`,
        component: React.lazy(() => import('views/app-views/dashboards/headings/add')),
    },
    {
        key: 'headings.edit',
        path: `${APP_PREFIX_PATH}/dashboards/headings/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/headings/edit')),
    },
    {
        key: 'vacation.list',
        path: `${APP_PREFIX_PATH}/dashboards/vacation/list`,
        component: React.lazy(() => import('views/app-views/dashboards/vacation/list')),
    },
    {
        key: 'vacation.edit',
        path: `${APP_PREFIX_PATH}/dashboards/vacation/edit`,
        component: React.lazy(() => import('views/app-views/dashboards/vacation/edit')),
    },
    {
        key: 'vacation.add',
        path: `${APP_PREFIX_PATH}/dashboards/vacation/add`,
        component: React.lazy(() => import('views/app-views/dashboards/vacation/add')),
    },
    {
        key: 'job.list',
        path: `${APP_PREFIX_PATH}/dashboards/job/list`,
        component: React.lazy(() => import('views/app-views/dashboards/job/list')),
    },
    {
        key: 'job.add',
        path: `${APP_PREFIX_PATH}/dashboards/job/add`,
        component: React.lazy(() => import('views/app-views/dashboards/job/add')),
    },
    {
        key: 'job.edit',
        path: `${APP_PREFIX_PATH}/dashboards/job/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/job/edit/')),
    },
    {
        key: 'work.area.list',
        path: `${APP_PREFIX_PATH}/dashboards/work_area/list`,
        component: React.lazy(() => import('views/app-views/dashboards/work_area/list')),
    },
    {
        key: 'work.area.add',
        path: `${APP_PREFIX_PATH}/dashboards/work_area/add`,
        component: React.lazy(() => import('views/app-views/dashboards/work_area/add')),
    },
    {
        key: 'work.area.edit',
        path: `${APP_PREFIX_PATH}/dashboards/work_area/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/work_area/edit/')),
    },
    {
        key: 'hour.list',
        path: `${APP_PREFIX_PATH}/dashboards/hour/list`,
        component: React.lazy(() => import('views/app-views/dashboards/hour/list')),
    },
    {
        key: 'hour.add',
        path: `${APP_PREFIX_PATH}/dashboards/hour/add`,
        component: React.lazy(() => import('views/app-views/dashboards/hour/add')),
    },
    {
        key: 'hour.edit',
        path: `${APP_PREFIX_PATH}/dashboards/hour/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/hour/edit')),
    },
    {
        key: 'report.ticket',
        path: `${APP_PREFIX_PATH}/dashboards/report/ticket`,
        component: React.lazy(() => import('views/app-views/dashboards/report/ticket')),
    },
    {
        key: 'report.payroll',
        path: `${APP_PREFIX_PATH}/dashboards/report/payroll`,
        component: React.lazy(() => import('views/app-views/dashboards/report/payroll')),
    },
    {
        key: 'report.upload.payroll',
        path: `${APP_PREFIX_PATH}/dashboards/report/upload-payroll`,
        component: React.lazy(() => import('views/app-views/dashboards/report/upload-payroll')),
    },
    {
        key: 'employee.phone.list',
        path: `${APP_PREFIX_PATH}/dashboards/employee_phone/list`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_phone/list/')),
    },
    {
        key: 'employee.phone.add',
        path: `${APP_PREFIX_PATH}/dashboards/employee_phone/add`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_phone/add/')),
    },
    {
        key: 'employee.phone.edit',
        path: `${APP_PREFIX_PATH}/dashboards/employee_phone/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_phone/edit/')),
    },
    {
        key: 'employee.email.list',
        path: `${APP_PREFIX_PATH}/dashboards/employee_email/list`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_email/list/')),
    },
    {
        key: 'employee.email.add',
        path: `${APP_PREFIX_PATH}/dashboards/employee_email/add`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_email/add/')),
    },
    {
        key: 'employee.email.edit',
        path: `${APP_PREFIX_PATH}/dashboards/employee_email/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_email/edit/')),
    },
    {
        key: 'employee.address.list',
        path: `${APP_PREFIX_PATH}/dashboards/employee_address/list`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_address/list/')),
    },
    {
        key: 'employee.address.add',
        path: `${APP_PREFIX_PATH}/dashboards/employee_address/add`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_address/add/')),
    },
    {
        key: 'employee.address.edit',
        path: `${APP_PREFIX_PATH}/dashboards/employee_address/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_address/edit/')),
    },
    {
        key: 'employee.item.list',
        path: `${APP_PREFIX_PATH}/dashboards/employee_item/list`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_item/list/')),
    },
    {
        key: 'employee.item.add',
        path: `${APP_PREFIX_PATH}/dashboards/employee_item/add`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_item/add/')),
    },
    {
        key: 'employee.item.edit',
        path: `${APP_PREFIX_PATH}/dashboards/employee_item/edit/:id`,
        component: React.lazy(() => import('views/app-views/dashboards/employee_item/edit/')),
    }
]
