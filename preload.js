const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  showSaveDialog: (options) => ipcRenderer.invoke('show-save-dialog', options),
  writeFile: (filePath, content) => ipcRenderer.invoke('write-file', filePath, content),
  
  // Menu event listeners
  onMenuNewNote: (callback) => ipcRenderer.on('menu-new-note', callback),
  onMenuSave: (callback) => ipcRenderer.on('menu-save', callback),
  onMenuExportNote: (callback) => ipcRenderer.on('menu-export-note', callback),
  onMenuImportNote: (callback) => ipcRenderer.on('menu-import-note', callback),
  onMenuFind: (callback) => ipcRenderer.on('menu-find', callback),
  onMenuViewEdit: (callback) => ipcRenderer.on('menu-view-edit', callback),
  onMenuViewSplit: (callback) => ipcRenderer.on('menu-view-split', callback),
  onMenuViewPreview: (callback) => ipcRenderer.on('menu-view-preview', callback),
  
  // Remove listeners
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
});