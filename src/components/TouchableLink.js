import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Link } from 'react-router-dom'

const TouchableLink = ({ to, children, style }) => (
    <View style={style}>
        <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <TouchableOpacity>
                {children}
            </TouchableOpacity>
        </Link>
    </View>
)

export {
    TouchableLink
}