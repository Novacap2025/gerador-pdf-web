function baixarPDF(nomeArquivo) {
  const link = document.createElement('a');
  link.href = nomeArquivo;
  link.download = nomeArquivo;
  link.click();
}
