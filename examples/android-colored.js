import React, { Component } from 'react'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#68efad',
  },
  navBar: {
    backgroundColor: '#68efad',
  },
  title: {
    color: '#rgba(0, 0, 0, 0.65)',
  },
  buttonText: {
    color: '#rgba(0, 0, 0, 0.45)',
  },
})

export default class NavBarAndroidColored extends Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavTitle style={styles.title}>
          {"App"}
        </NavTitle>
        <NavGroup>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              {"Button"}
            </NavButtonText>
          </NavButton>
        </NavGroup>
      </NavBar>
    )
  }
}
