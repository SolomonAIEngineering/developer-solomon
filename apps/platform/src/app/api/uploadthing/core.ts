import { getUser } from '@v1/supabase/queries';
import type { FileRouter } from 'uploadthing/next';
import { createUploadthing } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

export const fileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .middleware(async () => {
      const session = await getUser();
      if (!session) {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw new UploadThingError({
          message: 'You must be logged in to upload files',
          code: 'BAD_REQUEST',
        });
      }
      return { userId: session.id };
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log('Upload complete for userId:', metadata.userId);
      console.log('file url', file.url);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof fileRouter;
