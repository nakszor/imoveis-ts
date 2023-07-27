import verifyDataIsValidMiddleware from './verifyDataIsValidMiddleware'
import verifyEmailIsValidMiddleware from './verifyEmailIsValidMiddleware'
import verifyTokenIsValidMiddleware from './verifyTokenIsValidMiddleware'
import verifyAdminPermissionMiddleware from './verifyAdminPermissionMiddleware'
import verifyUserExistsMiddleware from './verifyUserExistsMiddleware'
import verifyCategoryExistsMiddleware from './verifyCategoryExistsMiddleware'
import verifyAddressIsValidMiddleware from './verifyAddressIsValidMiddleware'

export { verifyDataIsValidMiddleware, 
         verifyEmailIsValidMiddleware, 
         verifyTokenIsValidMiddleware,
         verifyAdminPermissionMiddleware,
         verifyUserExistsMiddleware,
         verifyCategoryExistsMiddleware,
         verifyAddressIsValidMiddleware }