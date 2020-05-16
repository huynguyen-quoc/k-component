import React, { FC, PropsWithChildren } from 'react'

export type AccessPermissionsType = 'some' | 'every'
export type AccessRenderNoAccessType = () => JSX.Element | null

interface AccessControlProps {
  permissions?: string[]
  allowPermissions?: string[]
  type?: AccessPermissionsType
  accessCheck?: (permissions: string[], allowPermissions: string[]) => boolean
  renderNoAccess?: AccessRenderNoAccessType
}

const hasPermissions = (permissions: Array<string>, allowPermissions: Array<string>, type: string): boolean => {
  if (!allowPermissions.length) {
    return true
  }
  if (type === 'some') {
    return allowPermissions.some((permission) => permissions.includes(permission))
  }
  return allowPermissions.every((permission) => permissions.includes(permission))
}

export type MocaAccessControlProps = PropsWithChildren<AccessControlProps>

export const MocaAccessControl: FC<MocaAccessControlProps> = ({
  renderNoAccess = (): JSX.Element | null => {
    return null
  },
  accessCheck = (): boolean => {
    return true
  },
  type = 'some',
  allowPermissions = [],
  permissions = [],
  children,
}: MocaAccessControlProps) => {
  const permitted = hasPermissions(permissions, allowPermissions, type)
  if (!permitted) {
    return renderNoAccess()
  }
  const extraCheck: boolean = accessCheck(permissions, allowPermissions)
  if (!extraCheck) {
    return renderNoAccess()
  }
  return <>{children}</>
}

MocaAccessControl.displayName = 'MocaAccessControl'

export default MocaAccessControl
