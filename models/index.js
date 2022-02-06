// bring in all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// link models 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment };