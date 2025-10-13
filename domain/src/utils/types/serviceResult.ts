export type ServiceResult<TEntity> = { success: true, data: TEntity | undefined } | { success: false, error: string }
