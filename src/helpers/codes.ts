enum AuthCodes {
  /**
   * Authentication token invalid
   */
  AUTH_TOKEN_INVALID = 'AUTH_TOKEN_INVALID',
  /**
   * No token provided to authentication
   */
  AUTH_NO_TOKEN_PROVIDED = 'AUTH_NO_TOKEN_PROVIDED',
  /**
   * Token does not follow pattern: Bearer ... or Static ...
   */
  AUTH_TOKEN_MALFORMATED = 'AUTH_TOKEN_MALFORMATED',
  /**
   * Trying to authenticate using other method than Bearer or Static
   */
  AUTH_METHOD_NOT_ALLOWED = 'AUTH_METHOD_NOT_ALLOWED',
  /**
   * Server does not found JWT key in env file
   */
  AUTH_ENV_JWTKEY_NOT_FOUND = 'AUTH_ENV_JWTKEY_NOT_FOUND',
  /**
   * Trying to authenticate with a user that is not linked to any tenant
   */
  AUTH_USER_WITHOUT_TENANT = 'AUTH_USER_WITHOUT_TENANT',
  /**
   * If required user was not found
   */
  AUTH_USER_NOT_FOUND = 'AUTH_USER_NOT_FOUND',
  AUTH_PERSON_NOT_FOUND = 'AUTH_PERSON_NOT_FOUND',
  AUTH_USER_INACTIVE = 'AUTH_USER_INACTIVE',
  /**
   * Static token revoked
   */
  AUTH_TOKEN_REVOKED = 'AUTH_TOKEN_REVOKED',
  /**
   * Authentication token validation error
   */
  AUTH_TOKEN_VALIDATION_ERROR = 'AUTH_TOKEN_VALIDATION_ERROR',
  /**
   * No mobile device ID provided
   */
  AUTH_NO_DEVICEID_PROVIDED = 'AUTH_NO_DEVICEID_PROVIDED',
  AUTH_FIRST_PERSON_ACCESS = 'AUTH_FIRST_PERSON_ACCESS',
  AUTH_NEW_DEVICE_ACCESS = 'AUTH_NEW_DEVICE_ACCESS',
  AUTH_SMS_VALIDATION = 'AUTH_SMS_VALIDATION',
  /**
   * Person does not have authorization to continue
   */
  AUTH_PERSON_NO_AUTHORIZATION = 'AUTH_PERSON_NO_AUTHORIZATION',
  /**
   * Error to validate device data
   */
  AUTH_DEVICE_VALIDATION_ERROR = 'AUTH_DEVICE_VALIDATION_ERROR',
  /**
   * Person authorization data was not found on database
   */
  AUTH_NO_AUTHORIZATION_DATA = 'AUTH_NO_AUTHORIZATION_DATA',
  /**
   * Person does not have any facelist registred
   */
  AUTH_NO_PERSON_FACELIST = 'AUTH_NO_PERSON_FACELIST',
  /**
   * User is trying to do an action that he don't have permission to
   */
  AUTH_USER_WITHOUT_PERMISSION = 'AUTH_USER_WITHOUT_PERMISSION',
  /**
   * User trying to edit admin user
   */
  AUTH_PERMISSION_EDIT_ADMIN_USER = 'AUTH_PERMISSION_EDIT_ADMIN_USER',
  /**
   * Trying to edit admin/totem user's role
   */
  AUTH_CANNOT_CHANGE_ROLE = 'AUTH_CANNOT_CHANGE_ROLE',
  /**
   * User data class validation error
   */
  AUTH_USER_DATA_VALIDATION = 'AUTH_USER_DATA_VALIDATION',
  /**
   * User change passoword validation error
   */
  AUTH_PASSWORD_VALIDATION = 'AUTH_PASSWORD_VALIDATION',
  AUTH_USER_UPDATE_ERROR = 'AUTH_USER_UPDATE_ERROR',
  /**
   * User does not have access to admin routes
   */
  AUTH_USER_NOT_ADMIN = 'AUTH_USER_NOT_ADMIN'
}

enum GeolocationCodes {
  /**
   * If any data of geolocation object is invalid or incorrect
   */
  GEOLOCATION_DATA_INVALID = 'GEOLOCATION_DATA_INVALID',
  /**
   * Error while validating geolocation data
   */
  GEOLOCATION_VALIDATION_ERROR = 'GEOLOCATION_VALIDATION_ERROR',
  GET_GEOLOCATION_ERROR = 'GET_GEOLOCATION_ERROR',
}

enum UploadsCodes {
  UPLOAD_NOT_ALLOWED_FILES = 'UPLOAD_NOT_ALLOWED_FILES',
  /**
   * Gotenberg conversor service is not availlable
   */
  UPLOAD_CONVERSOR_SERVICE_ERROR = 'UPLOAD_CONVERSOR_SERVICE_ERROR',
  /**
   * Error while handling uplodaded files
   */
  UPLOAD_HANDLE_FILES_ERROR = 'UPLOAD_HANDLE_FILES_ERROR',
  /**
   * No selfie was uploaded while trying to sign a document
   */
  NO_SELFIES_PROVIDED = 'NO_SELFIES_PROVIDED',
  NO_CPF_PROVIDED = 'NO_CPF_PROVIDED',
  FILE_SIZE_HIGGER_2MB = 'FILE_SIZE_HIGGER_2MB',
  NO_FILES_UPLOADED = 'NO_FILES_UPLOADED'
}

enum EnvCodes {
  /**
   * No default bucket name provided in env file
   */
  NO_ENV_BUCKET_DATA = 'NO_ENV_BUCKET_DATA',
  /**
   * No Terms filename provided in env file
   */
  NO_ENV_TERMS_DATA = 'NO_ENV_TERMS_DATA',
  NO_MIN_FACE_SIMILARITY_FOUND = 'NO_MIN_FACE_SIMILARITY_FOUND',
  NO_MAX_STORED_FACES_FOUND = 'NO_MAX_STORED_FACES_FOUND'
}

enum SignaturesCodes {
  NO_SIGNATUREID_PROVIDED = 'NO_SIGNATUREID_PROVIDED',
  NO_DOCUMENTID_PROVIDED = 'NO_DOCUMENTID_PROVIDED',
  /**
   * On batch sign, no signaturesID provided
   */
  NO_SIGNATURESID_PROVIDED = 'NO_SIGNATURESID_PROVIDED',
  /**
   * Current person is not signer
   */
  IS_NOT_SIGNER = 'IS_NOT_SIGNER',
  /**
   * Current person is not signatory
   */
  IS_NOT_SIGNATORY = 'IS_NOT_SIGNATORY',
  DOCUMENT_NOT_FOUND = 'DOCUMENT_NOT_FOUND',
  /**
   * No selection provided
   */
  NO_SELECTION_PROVIDED = 'NO_SELECTION_PROVIDED',
  /**
   * More or less selection found
   */
  MORE_LESS_SELECTION = 'MORE_LESS_SELECTION',
  /**
   * Selection provided is invalid
   */
  INVALID_SELECTION = 'INVALID_SELECTION',
  /**
   * Current signature process is finished
   */
  SIGNATURE_NOT_PENDING = 'SIGNATURE_NOT_PENDING',
  /**
   * Document is signed, rejected or canceled and is not accepting signatures anymore
   */
  DOCUMENT_NOT_PENDING = 'DOCUMENT_NOT_PENDING',
  /**
   * User alread signed or rejected this document
   */
  PERSON_ALREADY_SIGNED = 'PERSON_ALREADY_SIGNED',
  /**
   * Error while enqueueing signature
   */
  SIGNATURE_QUEUE_ERROR = 'SIGNATURE_QUEUE_ERROR',
  NO_REJECT_REASON_PROVIDED = 'NO_REJECT_REASON_PROVIDED',
  SIGNER_NOT_FOUND = 'SIGNER_NOT_FOUND',
  /**
   * When running sync sign/reject event and it fail
   */
  SIGNATURE_EVENT_ERROR = 'SIGNATURE_EVENT_ERROR',
  SIGNATURE_PROCESS_NOT_FOUND = 'SIGNATURE_PROCESS_NOT_FOUND',
  /**
   * When trying to sign terms file
   */
  TERMS_SIGNATURE_EVENT_ERROR = 'TERMS_SIGNATURE_EVENT_ERROR',
  CPF_DUPLICITY = 'CPF_DUPLICITY',
  NO_SIGNERS_PROVIDED = 'NO_SIGNERS_PROVIDED',
  TEMPLATE_PDF_GENERATION = 'TEMPLATE_PDF_GENERATION',
  /**
   * An error happens while updating signers, attestants or signatories on process
   */
  CHANGE_SIGNER_SIGNATORY_ERROR = 'CHANGE_SIGNER_SIGNATORY_ERROR'
}

enum FaceCodes {
  FACE_NOT_RECOGNIZED = 'FACE_NOT_RECOGNIZED',
  /**
   * Could not validate face due a service error or request error
   */
  FACE_SERVICE_ERROR = 'FACE_SERVICE_ERROR',
  /**
   * Face list already exists
   */
  FACE_LIST_ALREADY_EXISTS = 'FACE_LIST_ALREADY_EXISTS',
  /**
   * Face list does not exists
   */
  FACE_LIST_DONT_EXISTS = 'FACE_LIST_DONT_EXISTS',
  NO_FACE_DETECTED = 'NO_FACE_DETECTED',
  MULTIPLE_FACES_DETECTED = 'MULTIPLE_FACES_DETECTED',
  FACE_TOO_DIMM = 'FACE_TOO_DIMM'
}

enum CommonCodes {
  ENV_VARIABLE_NOT_FOUND = 'ENV_VARIABLE_NOT_FOUND',
  CLASS_VALIDATION_ERROR = 'CLASS_VALIDATION_ERROR',
  EMPTY_CEP_SEARCH = 'EMPTY_CEP_SEARCH',
  CEP_SEARCH_ERROR = 'CEP_SEARCH_ERROR',
  EMPTY_CNPJ_SEARCH = 'EMPTY_CNPJ_SEARCH',
  CNPJ_DATA_NOT_FOUND = 'CNPJ_DATA_NOT_FOUND',
  COMPANY_NOT_ACTIVE = 'COMPANY_NOT_ACTIVE',
  /**
   * Current CNPJ is already registered
   */
  CNPJ_ALREADY_EXISTS = 'CNPJ_ALREADY_EXISTS',
  /**
   * Current email is already assigned to a person/user
   */
  EMAIL_NOT_AVAILABLE = 'EMAIL_NOT_AVAILABLE',
  /**
   * Current domain is already assigned to a tenant
   */
  DOMAIN_NOT_AVAILABLE = 'DOMAIN_NOT_AVAILABLE',
  /**
   * The selected not belong to this tenant
   */
  NOT_FROM_TENANT = 'NOT_FROM_TENANT',
  /**
   * Current phonenumber is already assigned to a person/user
   */
  PHONENUMBER_NOT_AVAILABLE = 'PHONENUMBER_NOT_AVAILABLE',
  TENANT_INACTIVE = 'TENANT_INACTIVE',
  TENANT_NOT_FOUND = 'TENANT_NOT_FOUND',
  PDF_NOT_ENCRYPTED = 'PDF_NOT_ENCRYPTED',
  PDF_WRONG_ENCRYPTION_KEY = 'PDF_WRONG_ENCRYPTION_KEY',
  PDF_READ_ERROR = 'PDF_READ_ERROR',
  DOCUMENT_VALIDATION_DATA_NOT_FOUND = 'DOCUMENT_VALIDATION_DATA_NOT_FOUND',
  COMPANY_INACTIVE = 'COMPANY_INACTIVE',
  TEMPLATE_NOT_FOUND = 'TEMPLATE_NOT_FOUND',
  NO_ID_PROVIDED = 'NO_ID_PROVIDED'
}

enum FieldsCodes {
  FIELD_IN_USE = 'FIELD_IN_USE',
  FIELD_NOT_FOUND = 'FIELD_NOT_FOUND'
}

enum PersonCodes {
  PERSON_BATCH_CREATION_ERROR = 'PERSON_BATCH_CREATION_ERROR',
  PERSON_CREATION_ERROR = 'PERSON_CREATION_ERROR',
  PERSON_EDIT_ERROR = 'PERSON_EDIT_ERROR',
  PERSON_NOT_FOUND = 'PERSON_NOT_FOUND',
  CHANGE_PERSON_UID = 'CHANGE_PERSON_UID',
  PERSON_ALREADY_EXISTS = 'PERSON_ALREADY_EXISTS'
}

enum CreditsCodes {
  /**
   * The ammout of available credits is not sufficient
   */
  INSUFFICIENT_CREDITS = 'INSUFFICIENT_CREDITS',
  /**
   * If trying to refund more credits than available
   */
  REFUNDING_ABOVE_RESERVED = 'REFUNDING_ABOVE_RESERVED',
  /**
   * If trying to consume more credits than available
   */
  CONSUMING_ABOVE_RESERVED = 'CONSUMING_ABOVE_RESERVED'
}

enum GroupsCodes {
  GROUP_NOT_FOUND = 'GROUP_NOT_FOUND',
  /**
   * If a group is beeing created with only one item
   */
  SINGLE_ITEM_GROUP = 'SINGLE_ITEM_GROUP',
  DIFFERENT_GROUP_TYPE = 'DIFFERENT_GROUP_TYPE'
}

enum DownloadsCodes {
  DOWNLOAD_NOT_FOUND = 'DOWNLOAD_NOT_FOUND',
  DOWNLOAD_NOT_READY = 'DOWNLOAD_NOT_READY',
  GET_DOWNLOAD_URL_ERROR = 'GET_DOWNLOAD_URL_ERROR',
  DOWNLOAD_EXPIRATION_AUTO_DELETE = 'DOWNLOAD_EXPIRATION_AUTO_DELETE',
  EMPTY_DOWNLOAD_DESCRIPTION = 'EMPTY_DOWNLOAD_DESCRIPTION',
  EMPTY_DOWNLOAD_TYPE = 'EMPTY_DOWNLOAD_TYPE',
  ZIP_FOLDER_CREATION_ERROR = 'ZIP_FOLDER_CREATION_ERROR'
}

enum TagsCodes {
  TAG_EMPTY = 'TAG_EMPTY',
  SAVE_TAG_ERROR = 'SAVE_TAG_ERROR',
  TAG_NOT_FOUND = 'TAG_NOT_FOUND'
}

export default {
  ...AuthCodes,
  ...GeolocationCodes,
  ...UploadsCodes,
  ...EnvCodes,
  ...SignaturesCodes,
  ...FaceCodes,
  ...CommonCodes,
  ...PersonCodes,
  ...CreditsCodes,
  ...GroupsCodes,
  ...DownloadsCodes,
  ...TagsCodes,
  ...FieldsCodes
}
