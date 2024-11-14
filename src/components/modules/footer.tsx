export function Footer() {
  return (
    <footer className='mt-16 flex h-16 items-center justify-center border-t border-border bg-background px-6 py-4 text-muted-foreground sm:px-36 sm:py-6 lg:px-36 lg:py-6 xl:px-36 xl:py-6 2xl:px-36 2xl:py-6'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Feenko. All rights reserved.
      </p>
    </footer>
  );
}
