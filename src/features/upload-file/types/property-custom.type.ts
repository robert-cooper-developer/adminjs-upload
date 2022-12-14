import { ProviderOpts } from '../providers/base-provider'
import { MimeType } from './mime-types.type'

// src/features/upload-file/providers/base-provider.ts

/**
 * Custom ({@link PropertyOptions#custom}) properties passed down to the component.
 * @private
 */
type PropertyCustom = {
  filePathProperty: string;
  fileProperty: string;
  filesToDeleteProperty: string;
  keyProperty: string;
  fileNameProperty?: string;
  mimeTypeProperty?: string;
  bucketProperty?: string;
  defaultBucket: string;
  mimeTypes?: Array<MimeType | string>;
  maxSize?: number;
  provider: string;
  multiple: boolean;
  parentArray?: string,
  opts?: ProviderOpts;
};

export default PropertyCustom
