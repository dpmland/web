const watchWriteClipboard = async (
  callback: (state: PermissionState) => void
) => {
  const status = await navigator.permissions.query({
    // @ts-ignore
    name: 'clipboard-write',
  })

  const change = () => {
    callback(status.state)
  }

  change()

  status.addEventListener('change', change)

  return () => {
    status.removeEventListener('change', change)
  }
}

export default watchWriteClipboard
