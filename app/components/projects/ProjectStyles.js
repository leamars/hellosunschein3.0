const display = {
  display: 'flex',
  displayDirection: 'row',
  columnCount: 2,
  justifyContent: 'center',
  columnGap: 100
}

const row = {
  width: 'auto',
  backgroundColor: 'white'
}

const paragraph = {
  color: '#000',
  marginBottom: 40,
  fontWeight: 100,
  fontSize: 16,
  textAlign: 'left',
  backgroundColor: 'white',
  marginLeft: 150,
  marginRight: 150,
  lineHeight: 1.5
}
const content = {
  margin: 'auto',
  textAlign: 'center',
  flexGrow: 1.5,
  backgroundColor: 'white'
}

const smallImage = {
  maxWidth: '30%',
  backgroundColor: 'white',
  paddingLeft: 20,
  marginBottom: 40,
}

const mediumImage = {
  maxWidth: '40%',
  backgroundColor: 'white',
  paddingLeft: 20,
  marginBottom: 40,
}

const bigImage = {
  maxWidth: '80%',
  backgroundColor: 'white',
  paddingLeft: 20,
  marginBottom: 40,
}

const ProjectStyles = {
  paragraph: paragraph,
  content: content,
  mediumImage: mediumImage,
  smallImage: smallImage,
  bigImage: bigImage,
  display: display,
  row: row
}

module.exports = ProjectStyles;
