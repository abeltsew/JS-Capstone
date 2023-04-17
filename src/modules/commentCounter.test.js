/**
 * @jest-environment jsdom
 */

import { updateCommentCount } from './renderComment.js';

describe('Should render the exact comments count', () => {
  it('Should render one comment in the list', () => {
    const comment = [{ comment: 'Nice' }];
    const commentsHeader = document.createElement('h2');
    updateCommentCount(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('comments (1)');
  });

  it('Should render two comment in the list', () => {
    const comment = [{ comment: 'Nice' }, { comment: 'cool' }];
    const commentsHeader = document.createElement('h2');
    updateCommentCount(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('comments (2)');
  });
});
